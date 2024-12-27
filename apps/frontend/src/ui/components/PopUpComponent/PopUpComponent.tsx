import React, { useEffect, useState } from "react";
import { Badge, notification } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import { WrapperNotification, WrapperConfirmButton } from "./style";
import { useRouter, redirect } from 'next/navigation';
// import { addMessage, removeMessage } from "../../redux/slice/notiSlice";
// import { useNavigate } from "react-router-dom";
// import io from "socket.io-client";
import axios from "axios";
// import { markMessageAsRead } from "../../redux/slice/notiFromDBSlice";
// import { RootState } from "../../redux/store";

interface Message {
  id: string;
  orderId: string;
  status: string;
}

const close = () => {
  console.log("Notification was closed. Either the close button was clicked or duration time elapsed.");
};

const PopUpComponent: React.FC = () => {
  const router = useRouter();
  const [count, setCount] = useState<string>("");
  const username = localStorage.getItem("username");

  const handleNavigate = (path: string) => {
    return () => {
      router.push(path);
    };
  };

  const handleMessages = (status: string): string => {
    switch (status) {
      case "Created":
        return "Đơn hàng của bạn đã được tạo";
      case "SUCCESS":
        return "Đặt hàng thành công";
      case "CANCELED":
        return "Đơn hàng của bạn đã bị hủy";
      case "PENDING":
        return "Đơn hàng của bạn đang chờ xác nhận";
      case "DELIVERING":
        return "Đơn hàng của bạn đang được giao";
      default:
        return "Trạng thái không xác định";
    }
  };

  const setIsReadMess = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.REACT_APP_NOTI_MS_URL}/notification?noti_id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  // useEffect(() => {
  //   const socket = io(`${process.env.REACT_APP_NOTI_SOCKET_URL}`, {
  //     auth: {
  //       token: localStorage.getItem("token"),
  //     },
  //   });

  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socket.on(`noti-${localStorage.getItem("username")}`, (msg: string) => {
  //     // dispatch(addMessage(JSON.parse(msg) as Message));
  //   });

  //   socket.on("error", (error) => {
  //     console.error("Socket error:", error);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [dispatch]);

  // const messages = useSelector((state: RootState) => state.notification.messages);
  const messages: any[] = [];

  useEffect(() => {
    if (messages.length > 0) {
      setCount("new");
      openAllNotifications();
    } else {
      setCount("");
    }
  }, [messages]);

  const [api, contextHolder] = notification.useNotification();

  const removeNotification = (id: string) => {
    notification.destroy(`open${id}`);
    // dispatch(removeMessage({ messageId: id }));
    // dispatch(markMessageAsRead({ messageId: id }));
    setIsReadMess(id);
  };

  const openAllNotifications = () => {
    messages.forEach((msg) => {
      openNotification(msg);
    });
  };

  const openNotification = (msg: Message) => {
    const key = `open${msg.id}`;
    const btn = (
      <WrapperConfirmButton
        onClick={() => removeNotification(msg.id)}
        size="small"
        textButton="OK"
        type="primary"
      ></WrapperConfirmButton>
    );
    notification.open({
      message: "Mã đơn hàng: " + msg?.orderId,
      description: handleMessages(msg?.status),
      btn,
      key,
      duration: 0,
      onClose: close,
      style: {
        width: 350,
      },
    });
  };

  useEffect(() => {
    if (messages.length === 0) {
      notification.destroy();
    }
  }, [messages]);

  return (
    <>
      {contextHolder}
      <div>
        {username ? (
          <div
            style={{ display: "flex", gap: "5px", alignItems: "center", textAlign: "center", justifyContent: "center", color: "white" }}
            onClick={handleNavigate("/manage-noti")}
          >
            <Badge count={count} style={{ backgroundColor: "red" }} size="small">
              <NotificationOutlined style={{ fontSize: "30px", color: "white" }} />
            </Badge>
            <WrapperNotification>Tất cả thông báo</WrapperNotification>
          </div>
        ) : (
          <div
            style={{ display: "flex", gap: "5px", alignItems: "center", textAlign: "center", justifyContent: "center", color: "white" }}
            onClick={handleNavigate("/sign-in")}
          >
            <NotificationOutlined style={{ fontSize: "30px", color: "white" }} />
            <WrapperNotification>Tất cả thông báo</WrapperNotification>
          </div>
        )}
      </div>
    </>
  );
};

export default PopUpComponent;
