import React, { useState } from "react";
import ProfilePic from "../common-components/ProfilePic";
import profile1 from "../../WebApp-images/profiles/profile7.png";
import backIcon from "../../WebApp-images/white-back-arrow.svg";
import sendIcon from "../../WebApp-images/sendIcon.svg";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../features/userDetails/userSlice";
import { useNavigate } from "react-router-dom";
import { pushNotification } from "../../../features/pushNotification/pushNotificationSlice";

const url="http://fahadnoufal.pythonanywhere.com"

const Room = () => {
  const dispatch = useDispatch();
  const { roomItem, room_messages } = useLoaderData();
  const [messageList, setMessageList] = useState(room_messages);
  const profilePics = useSelector((store) => store.profile.profiles);

  const navigate = useNavigate();

  const {user,currentUser} = useSelector((state) => state.user);

  const [message, set_message] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      dispatch(pushNotification("You need to log in to add a message"));
      return navigate("/app/login");
    }

    const response = await fetch(
      `http://localhost:8000/api/message/${roomItem.id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(user.access),
        },
        body: JSON.stringify({ message: message }),
      }
    );
    if (response.status !== 200) {
      console.log("something went wrong");
    }
    if (response.statusText === "Unauthorized") {
      dispatch(removeUser());
      navigate("/app/login");
      dispatch(pushNotification("Access token Expired . Please log in again"));
    }
    const data = await response.json();
    setMessageList((prev) => [data, ...prev]);
    set_message("");
  };

  const RoomMember = ({ avatar, username, id }) => {
    return (
      <Link
        to={`/app/user/${id}/`}
        className="member-card flex tracking-widest font-semibold bg-[#696969] cursor-pointer p-[9px] rounded-[10px] bg-opacity-25 text-blueRoom gap-[12px] pl-3 items-center"
      >
        <ProfilePic profile={profilePics[avatar]} width="47" />
        <span className="pr-6 overflow-hidden">{username}</span>
      </Link>
    );
  };

  const MessageBox = ({ profile, username, id, timeSince, message }) => {
    return (
      <div className="message-box relative px-[30px] py-[11px] bg-[#0c0c0c] rounded-[6px] ">
        <div className="flex justify-between items-center">
          <Link
            to={`/app/user/${id}/`}
            className="msg-profile flex items-center gap-2"
          >
            <ProfilePic profile={profile} width="30" />
            <span className=" text-[0.8rem] text-blueRoom tracking-[2px] font-medium ">
              {username}
            </span>
          </Link>
          <span className="msg-timesince text-[#9c9c9c] text-[0.7rem] tracking-wider">
            {timeSince} ago
          </span>
        </div>
        <div className="message-content mt-2 ml-1 mb-1 text-[0.8rem] tracking-[2px] font-medium">
          {message}
        </div>
      </div>
    );
  };

  const NoMessages = () => {
    return (
      <div className=" tracking-wider md:pl-0 pl-4 -mb-8">
        <span>No Messages Added</span>
      </div>
    );
  };

  let messages = messageList.map((item) => (
    <MessageBox
      key={item.id}
      profile={profilePics[item.user_id.avatar]}
      id={item.user_id.id}
      username={item.user_id.username}
      timeSince={item.timesince_field}
      message={item.body}
    />
  ));
  let members = roomItem.participants.map((member) => (
    <RoomMember key={member.id} {...member} />
  ));

  return (
    <div className="flex justify-center h-[99svh] -mt-[75px]  overflow-hidden pt-[40px] web-app">
      <div className="flex  justify-between max-w-[1400px] w-full px-8 gap-24 mb-4 mt-[65px]">
        <div className="room-container flex w-full flex-grow flex-col rounded-[20px] max-w-[866px] h-full relative overflow-hidden">
          <div className="flex justify-between w-full bg-[#696969] py-3 px-8 md:py-[22px] md:px-[56px]">
            <div className=" tracking-[5px] text-[1.4rem] md:text-[1.7rem] font-bold   ">
              Room
            </div>
            <div className="flex gap-8">
              {user&&roomItem.host.id===currentUser.id?(
                <button className="edit-button" onClick={()=>(navigate(`/app/update-room/${roomItem.id}`))} >
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>):''}
              <button
                className="pl-4 scale-75 md:scale-100 -mb-2 pb-2 z-40"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <img
                  src={backIcon}
                  className="w-[28px] filter text-white "
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className=" md:px-[50px] px-8 gap-[10px] pt-[40px] pb-[20px] overflow-hidden flex flex-col h-full flex-grow bg-[#1e1e1e]">
            <div className="flex mb-1 relative justify-between ">
              <h1 className=" text-[1.4rem] md:text-[1.8rem] font-semibold tracking-[3px] text-blueRoom  ">
                {roomItem.name}
              </h1>
              <span className=" text-[#848484] md:relative absolute left-0 bottom-[-20px] text-[0.8rem] md:text-[1rem] tracking-[0px] whitespace-nowrap mt-3  ">
                {roomItem.timesince_field} ago
              </span>
            </div>
            <div className="created-by  flex items-center gap-4 mt">
              <span className="text-[1rem] italic tracking-[2px] text-[#c7c7c7] font-medium">
                Created by
              </span>
              <Link
                to={`/app/user/${roomItem.host.id}`}
                className="py-1 pl-2 pr-3 bg-[#696969] font-medium tracking-[1px] rounded-[10px] gap-2 text-blueRoom text-[0.9rem] bg-opacity-25 flex items-center "
              >
                <ProfilePic profile={profilePics[roomItem.host.avatar]} width="38" />
                {roomItem.host.username}
              </Link>
            </div>
            <div className="room-dec-cont hidden md:block">
              <span className=" text-[#979797] italic font-bold text-[1.45rem] opacity-70 ">
                Description
              </span>
              <p className=" text-[1.05rem] mt-[10px] leading-6 italic tracking-widest ">
                {roomItem.description}
              </p>
            </div>
            <div className="messages-container md:mt-2 mt-6 w-full h-full pt-[38px] rounded-[16px] overflow-scroll bg-[#040404] ">
              <div className=" messages-list px-3 md:px-[30px] flex flex-col gap-2 flex-grow mb-12 ">
                {messages.length === 0 ? <NoMessages /> : messages}
              </div>
            </div>
            <form
              className=" mx-8 md:mx-[50px] text-[0.8rem] md:text-[1rem] pl-4 bg-[#797979] absolute bottom-[20px] left-0 flex right-0 rounded-[16px] "
              onSubmit={handleSubmit}
            >
              <input
                autoComplete="off"
                type="text"
                onChange={(e) => {
                  set_message(e.target.value);
                }}
                value={message}
                name="message"
                className=" bg-transparent  py-3  w-full outline-none placeholder:opacity-80 placeholder:text-white placeholder:tracking-[3px]"
                placeholder="Write your message here..."
              />
              <button
                className=" bg-blueRoom text-[0.9rem] md:text-lg text-gray-200 font-semibold rounded-[16px] flex gap-1 items-center rounded-l-none px-4  "
                type="submit"
              >
                <span>Send</span>{" "}
                <img src={sendIcon} className="w-6 scale-75 md:scale-100 mr-2" alt="" />
              </button>
            </form>
          </div>
        </div>
        <div className=" w-[400px] hidden rounded-[20px] overflow-hidden xl:flex h-[70%] flex-col ">
          <div className=" tracking-[5px] text-[1.7rem] font-semibold bg-[#696969] py-[22px]  text-center w-full">
            Members
          </div>
          <div className="members-container overflow-scroll rounded-b-[20px] flex flex-col p-[22px] gap-[10px] bg-[#1e1e1e] w-full ">
            {members.length === 0 && (
              <div className="member-card flex tracking-widest font-semibold bg-[#696969] py-4 cursor-pointer  rounded-[10px] bg-opacity-25 text-blue-400 gap-[12px] pl-3 items-center">
                <span className="pr-6 overflow-hidden text-center w-full">
                  No active members
                </span>
              </div>
            )}
            {members}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

export const roomLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`${url}/api/room/${id}/`);
  return res.json();
};