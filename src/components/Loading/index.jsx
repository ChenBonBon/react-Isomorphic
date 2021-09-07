import { Spin } from "antd";
import styles from "./index.less";

export default function Loading({ type, loading = true }) {
  return (
    <Spin
      wrapperClassName={type === "overlay" ? styles.overlay : styles.normal}
      spinning={loading}
    >
      <span />
    </Spin>
  );
}
