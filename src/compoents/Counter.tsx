import ReactVisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Counter = ({ end, decimals } : any) => {
    return (
        <CountUp
            end={end ? end : 100}
            duration={1}
            decimals={decimals ? decimals : 0}
        >
            {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayedCall>
                    <span className="counter" data-to={end} ref={countUpRef}>
            count
                    </span>
                </ReactVisibilitySensor>
            )}
        </CountUp>
    );
};

export default Counter;
