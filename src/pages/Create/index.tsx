import { BrowserMultiFormatReader } from '@zxing/library';
import { Button } from 'antd';
import { useQRCode } from 'next-qrcode';
import React, { useEffect } from 'react';
import Detail from './Detail';

const Create = (props: any) => {
  console.log(props);

  const videoRef = React.useRef(null);
  const { Canvas } = useQRCode();
  let codeReader = new BrowserMultiFormatReader();
  let openScan = async () => {
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        console.log('videoInputDevices', videoInputDevices, '摄像头设备');

        // 默认获取第一个摄像头设备id
        let firstDeviceId = videoInputDevices[0].deviceId; // 根据id选择摄像头

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        decodeFromInputVideoFunc(firstDeviceId);
        // navigator.getUserMedia(
        //   { video: { deviceId: firstDeviceId } },
        //   () => {
        //     console.log(document.cookie);
        // decodeFromInputVideoFunc(firstDeviceId);
        //   },
        //   () => {
        //     Toast("请关闭链接,重新进入");
        //     router.back();
        //   }
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let decodeFromInputVideoFunc = (firstDeviceId: any) => {
    console.log(firstDeviceId);

    codeReader.decodeFromInputVideoDeviceContinuously(
      null, // firstDeviceId  为null 时默认选择面向环境的摄像头
      'video',
      (result: any, err) => {
        if (result) {
          console.log(result, '扫描结果');
        }
        if (err && !err) {
          console.error(err);
        }
      },
    );
  };

  useEffect(() => {
    // openScan();
  }, []);

  return (
    <>
      <div>Create</div>
      <Canvas
        text={'https://www.baidu.com'}
        options={{
          errorCorrectionLevel: 'M',
          margin: 3,
          scale: 1,
          width: 200,
          color: {
            dark: '#000',
            light: '#fff',
          },
        }}
      />
      {/* <video ref={videoRef} id="video" autoplay playsInline></video> */}
      <Detail />
      <video autoPlay playsInline ref={videoRef} hidden />
      <Button onClick={openScan}>扫一扫</Button>
    </>
  );
};

export default Create;
