import React from "react";
import { PinContainer } from "../../components/aceternity/Event-card.jsx";
import { TextGenerateEffect } from "../../components/aceternity/Textgenerate.jsx";
function Event() {
  return (
    <>
      <div className="mb-12 h-5 text-white">{/* feff */}</div>

      <div className="h-5 w-full text-center">
        <TextGenerateEffect words={"Exciting Parakram Events"} />;
      </div>
      <div className="mb-12 h-5 text-white">{/* feff */}</div>
      <div className="mb-12 h-5 text-white">{/* feff */}</div>

      <div className="grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-25 p-2 ">
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Athletics
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRobGV0aWN8ZW58MHx8MHx8fDA%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Badminton
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1623998021722-b934f73081df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Basketball
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.pexels.com/photos/69773/uss-nimitz-basketball-silhouettes-sea-69773.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Chess
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3N8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3N8ZW58MHx8MHx8fDA%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Cricket
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://media.istockphoto.com/id/641186582/photo/batsman-on-the-stadium-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=VVUv7TFlghQVpEdDqzh3YcLHI_gnATQyVr3oOtM4xSw="
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Football
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://media.istockphoto.com/id/860880772/photo/determined-bicycle-kick-on-a-soccer-match.webp?a=1&b=1&s=612x612&w=0&k=20&c=BMlbLztq5r4LqRBMRInsJ-DOsdBRJcVAGPmHNeb7OQ4="
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Hockey
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1554539484-e4fab56d4a5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvY2tleXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Powerlifting
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://plus.unsplash.com/premium_photo-1664298367434-0408974ab0bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG93ZXJsaWZ0aW5nfGVufDB8fDB8fHww"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Squash
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3F1YXNoJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Table Tennis
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://media.istockphoto.com/id/1417521713/photo/man-serving-ping-pong-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=ApaZcwsFizP4dRDwCH-Cq9dZ0e8bmaKMBdc_HcNz_jU="
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Volleyball
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://images.unsplash.com/photo-1728971121667-80d6513f83e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZvbGxleWJhbGwlMjBzbWFzaHxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </PinContainer>
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              WeightLifting
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://plus.unsplash.com/premium_photo-1722556828905-51b00497fa2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VpZ2h0bGlmdGlibmd8ZW58MHx8MHx8fDA%3D"
            />
          </div>
        </PinContainer>
      </div>
      <div className="mt-20 h-5 text-white">{/* feff */}</div>
      <div className="flex justify-center items-center">
        <PinContainer title="See More" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-violet-500/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-4xl text-violet-500 ">
              Tennis
            </h3>
            <img
              className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              src="https://media.istockphoto.com/id/481280181/photo/tennis-sport.webp?a=1&b=1&s=612x612&w=0&k=20&c=EvmnCaL5k11Nw2V2RvvajOfGANoUf9dBGnojoOcdFhk="
            />
          </div>
        </PinContainer>
      </div>
    </>
  );
}
export default Event;
