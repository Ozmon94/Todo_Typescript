import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  WheelEvent,
} from "react";
import styled from "styled-components";

interface IProps {
  minut: number;
  hour: number;
  setHour: Dispatch<SetStateAction<number>>;
  setMinut: Dispatch<SetStateAction<number>>;
}

interface HourElementProps {
  wheelTranslate: number;
}
interface MinuteElementProps {
  minuteTranslate: number;
}
type IRef = HTMLDivElement;

const hours = Array.from(Array(25).keys());
const minutes = Array.from(Array(61).keys());

const CarouselTimeInput = React.forwardRef<IRef, IProps>(
  ({ minut, hour, setHour, setMinut }, ref) => {
    const [hourTranslateY, setHourTranslateY] = useState<number>(0);
    const [minuteTranslateY, setMinuteTranslateY] = useState<number>(0);

    const handleOnHourWheel = (e: WheelEvent<HTMLUListElement>): void => {
      const DeltaY = e.deltaY;
      if (DeltaY > 0) {
        setHourTranslateY((prev) => (prev <= -960 ? prev : prev - 40));
      } else {
        setHourTranslateY((prev) => (prev >= 0 ? prev : prev + 40));
      }
    };

    const handleOnMinuteWheel = (e: WheelEvent<HTMLUListElement>): void => {
      const DeltaY = e.deltaY;
      if (DeltaY > 0) {
        setMinuteTranslateY((prev) => (prev <= -2400 ? prev : prev - 40));
      } else {
        setMinuteTranslateY((prev) => (prev >= 0 ? prev : prev + 40));
      }
    };

    useEffect(() => {
      setMinut((minuteTranslateY * -1) / 40);
      setHour((hourTranslateY * -1) / 40);
    }, [minuteTranslateY, hourTranslateY, setHour, setMinut]);

    useEffect(() => {
      setHourTranslateY(hour * -40);
      setMinuteTranslateY(minut * -40);
    }, [hour, minut]);

    return (
      <Wrapper>
        <CarouselList onWheel={handleOnHourWheel}>
          {hours.map((number) => (
            <HourElement key={`H${number}`} wheelTranslate={hourTranslateY}>
              {" "}
              {number}
            </HourElement>
          ))}
        </CarouselList>
        <CarouselList onWheel={handleOnMinuteWheel}>
          {minutes.map((number) => (
            <MinuteElement
              key={`M${number}`}
              minuteTranslate={minuteTranslateY}
            >
              {number}
            </MinuteElement>
          ))}
        </CarouselList>
        <HourHeightLine />
      </Wrapper>
    );
  }
);

const HourHeightLine = styled.div`
  position: absolute;
  background: #85d3fd;
  top: 80px;
  left: -20px;
  right: -20px;
  height: 40px;
  pointer-events: none;
  border-radius: 10px;
`;

const HourElement = styled.li<HourElementProps>`
  text-align: center;
  height: 40px;
  font-size: 20px;
  transition: all 0.4s ease;
  transform: translateY(${(props) => props.wheelTranslate}px);
`;
const MinuteElement = styled.li<MinuteElementProps>`
  text-align: center;
  height: 40px;
  font-size: 20px;
  transition: all 0.4s ease;
  transform: translateY(${(props) => props.minuteTranslate}px);
`;

const Wrapper = styled.div`
  color: black;
  background-color: transparent;
  height: 200px;
  display: flex;
  position: relative;
  border: 1px solid rgb(6, 99, 141);
  border-radius: 10px;
  margin: 20px 0 10px;
`;

const CarouselList = styled.ul`
  flex: 1;
  overflow: hidden;
  padding-top: 90px;
  z-index: 1;
`;

export default CarouselTimeInput;
