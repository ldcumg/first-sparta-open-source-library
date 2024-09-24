import { useState } from "react";
import ToastContainer from "./components/ToastContainer";
import toast from "./utils/toast";
import ToastOptionType, { ToastPosition } from "./types/ToastType";

const initialState = {
  type: "alert",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  customImage: undefined
};

const App = () => {
  const [option, setOption] = useState<ToastOptionType>(initialState);

  const buttonClick = (e: React.MouseEvent<HTMLButtonElement>, key: keyof ToastOptionType, value: string | boolean) => {
    const activeElement = document.querySelector(`.${key}-on`);
    if (activeElement) {
      activeElement.classList.remove(`${key}-on`);
    }
    e.currentTarget.classList.add(`${key}-on`);
    setOption((prev) => ({ ...prev, [key]: value }));
  };

  const showToastButton = (position: ToastPosition) => {
    if (option.type === "alert") {
      toast.alert("alert message!", {
        ...option,
        type: "normal",
        position: position
      });
    } else if (option.type === "success") {
      toast.success("success message!", { ...option, position: position });
    } else if (option.type === "warning") {
      toast.warning("warning message!", { ...option, position: position });
    } else if (option.type === "error") {
      toast.error("error message!", { ...option, position: position });
    } else if (option.type === "info") {
      toast.info("info message!", { ...option, position: position });
    } else if (option.type === "confirm") {
      toast.confirm("confirm?", { ...option }).then((res: any) => {
        if (res) {
          toast.alert("킹킹 준호님", { ...option });
        } else {
          toast.error("confirm cancel", {
            ...option,
            type: "error",
            position: position
          });
        }
      });
    }
  };

  return (
    <>
      <ToastContainer isFold={false} position="t-r" time={5000} />

      <h1>First Sparta Open Sorce Library</h1>
      <main id="main-frame">
        <div id="option">
          <div className="option-division">
            <span className="option-cell">
              <h2>기본 알림</h2>
              <span id="common-alert">
                <span>
                  <button className="type-on" onClick={(e) => buttonClick(e, "type", "alert")}>
                    alert
                  </button>
                  <button onClick={(e) => buttonClick(e, "type", "success")}>success</button>
                </span>
                <span>
                  <button onClick={(e) => buttonClick(e, "type", "warning")}>warning</button>
                  <button onClick={(e) => buttonClick(e, "type", "info")}>info</button>
                </span>
                <span>
                  <button onClick={(e) => buttonClick(e, "type", "error")}>error</button>

                  <button
                    onClick={(e) => {
                      buttonClick(e, "type", "confirm");
                    }}
                  >
                    confirm
                  </button>
                </span>
              </span>
            </span>
            <span className="option-cell">
              <h2>autoClose</h2>
              <div>
                <button onClick={(e) => buttonClick(e, "autoClose", false)}>false</button>
                <button className="autoClose-on" onClick={(e) => buttonClick(e, "autoClose", true)}>
                  true
                </button>
              </div>
            </span>
            <span className="option-cell">
              <h2>progressBar</h2>
              <div>
                <button onClick={(e) => buttonClick(e, "progressBar", false)}>false</button>
                <button className="progressBar-on" onClick={(e) => buttonClick(e, "progressBar", true)}>
                  true
                </button>
              </div>
            </span>
          </div>
          <div className="option-division">
            <span className="option-cell">
              <h2>pauseOnHover</h2>
              <div>
                <button onClick={(e) => buttonClick(e, "pauseOnHover", false)}>false</button>
                <button className="pauseOnHover-on" onClick={(e) => buttonClick(e, "pauseOnHover", true)}>
                  true
                </button>
              </div>
            </span>
            <span className="option-cell">
              <h2>closeOnClick</h2>
              <div>
                <button onClick={(e) => buttonClick(e, "closeOnClick", false)}>false</button>
                <button className="closeOnClick-on" onClick={(e) => buttonClick(e, "closeOnClick", true)}>
                  true
                </button>
              </div>
            </span>
            <span className="option-cell">
              <h2>customImage</h2>
              <div>
                <button className="customImage-on" onClick={(e) => buttonClick(e, "customImage", false)}>
                  false
                </button>
                <button
                  onClick={(e) =>
                    buttonClick(
                      e,
                      "customImage",
                      "https://online.spartacodingclub.kr/assets/images/profile/rtan_thumb_01.png"
                    )
                  }
                >
                  true
                </button>
              </div>
            </span>
          </div>
        </div>
        <div id="grid-wrap">
          <div id="grid-container" className="App">
            <span className="cell">
              <button onClick={() => showToastButton("t-l")}>t-l</button>
            </span>

            <span className="cell">
              <button onClick={() => showToastButton("t-c")}>t-c</button>
            </span>

            <span className="cell">
              <button onClick={() => showToastButton("t-r")}>t-r</button>
            </span>

            <span className="cell">
              <button onClick={() => showToastButton("c-l")}>c-l</button>
            </span>
            <span className="cell">
              <button onClick={() => showToastButton("c-c")}>c-c</button>
            </span>
            <span className="cell">
              <button onClick={() => showToastButton("c-r")}>c-r</button>
            </span>

            <span className="cell">
              <button onClick={() => showToastButton("b-l")}>b-l</button>
            </span>
            <span className="cell">
              <button onClick={() => showToastButton("b-c")}>b-c</button>
            </span>
            <span className="cell">
              <button onClick={() => showToastButton("b-r")}>b-r</button>
            </span>
          </div>
        </div>
      </main>

      <div id="introduce" style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>01. 기본 사용법</h2>
          <img
            height={250}
            src="https://github.com/user-attachments/assets/dcd0877f-18b5-4b94-89ea-478b93a45c72"
            alt=""
          />

          <div>
            {" "}
            가장 기본적인 사용법으로{" "}
            <img src="https://github.com/user-attachments/assets/9192f528-b16f-4581-b70a-405a33373df9" alt="" /> 을 통해
            기본 알럿을 출력하실 수 있습니다.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>02. ToastContainer 커스텀</h2>
          <img src="https://github.com/user-attachments/assets/855bd44c-b25f-4b33-8a90-954c2770f3c1" alt="" />

          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                1. isFold : true로 세팅시, 토스트를 접어서 보여줄 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/f72063fc-8697-4951-aa91-13ca75aceffd" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                2. position : 알림 토스트의 기본 출력 위치를 설정해주실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/f72063fc-8697-4951-aa91-13ca75aceffd" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                3. time : 알림 토스트의 기본 자동종려 타이머를 설정해주실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/f72063fc-8697-4951-aa91-13ca75aceffd" alt="" />
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>03. 타입 리스트</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>1. alert : 기본적인 alert 스타일입니다.</div>
              <img src="https://github.com/user-attachments/assets/6a6dce73-a1cd-4529-ba6b-f14e01addb0c" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                2. success : 행동이 성공했을 경우 사용 추천드립니다.
              </div>
              <img src="https://github.com/user-attachments/assets/d413d278-4958-4e5d-95c7-f11e35134048" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                3. error : 행동에 문제가 생겼을 경우 사용 추천드립니다.
              </div>
              <img src="https://github.com/user-attachments/assets/d413d278-4958-4e5d-95c7-f11e35134048" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                4. warning : 사용자에게 경고를 주고 싶으실 경우 사용 추천드립니다.
              </div>
              <img src="https://github.com/user-attachments/assets/3b9a01cb-bb60-4f72-83a1-8937a7c13399" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                5. info : 사용자에게 정보를 주고 싶으실 경우 사용 추천드립니다.
              </div>
              <img src="https://github.com/user-attachments/assets/ef260721-7749-4f63-bc22-471cc10e115d" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                6. confirm : 사용자에게 예/아니오 선택지를 주고 싶으실 경우 사용 추천드립니다.
              </div>
              <img src="https://github.com/user-attachments/assets/27cada29-29ae-42d1-a629-40acf21d3f21" alt="" />
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>04. Position 세팅</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                행(top, center, bottom)과 열(left, center right)를 조합하여 알림창의 위치를 설정하실 수 있습니다.
              </div>
              <br />
              <img src="https://github.com/user-attachments/assets/3c796e0d-f3c2-4757-a418-54c1f1287b88" alt="" />
              <br />
              <img src="https://github.com/user-attachments/assets/5e865306-494f-45ae-8cef-83f71f4f496d" alt="" />
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>05. Close 세팅</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                1. autoClose : 알림 토스트의 자동종료 기능을 설정하실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/31813d9c-a424-4c23-be5c-0a57de2af66c" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                2. closeOnClick : 알림 토스트 클릭시 종료 기능을 설정하실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/f2f72807-5dc7-4f1c-b8b2-d12aced512b7" alt="" />
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>06. 타이머 세팅</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                1. autoCloseTime : 알림 토스트의 유지시간을 커스텀 설정하실 수 있습니다.(ms)
              </div>
              <img src="https://github.com/user-attachments/assets/e54aaf8b-f803-43a9-9fc1-4b07e2f64c27" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                2. progressBar : autoCloseTime에 맞춰 progressbar의 길이가 줄어듭니다.
              </div>
              <img src="https://github.com/user-attachments/assets/dfd98a9e-e44f-4805-8d14-2a9043eb59f5" alt="" />
            </li>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                3. pauseOnHover : 알림 토스트에 마우스를 올려놓았을 때, 타이머를 멈추는 기능을 설정하실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/8b62c8c0-c2ae-4294-a783-9a32cc73ed4b" alt="" />
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2>07. 추가 커스텀</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: "0" }}>
            <li>
              <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                1. customImage : 알림 토스트에 원하시는 이미지를 출력 하실 수 있습니다.
              </div>
              <img src="https://github.com/user-attachments/assets/87bb5da3-702e-4108-a393-ee28ace575cd" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
