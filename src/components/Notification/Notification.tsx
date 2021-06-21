import { FC, ReactElement } from "react";
import './index.scss';

const Notification: FC<{ text: string }> = ({ text }): ReactElement => (
    <p aria-label="error" className="error-message">{text}</p>
);

export default Notification;