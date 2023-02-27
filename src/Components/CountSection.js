import React from "react";
import styles from "./styles";
import Counter from "./counter";
export default function CountSection() {
  return (
    <div style={styles.count_section}>
      <Counter
        start={0}
        end={3000}
        duration={2}
        style={styles.counter}
        title="Participants"
      />
      <Counter
        start={0}
        end={30}
        duration={2}
        style={styles.counter}
        title="Sponsors"
      />
      <Counter
        start={0}
        end={100}
        duration={2}
        style={styles.counter}
        title="Events"
      />
    </div>
  );
}
