import React from "react";

import styles from "./DreAndEmail.module.scss";

type DreAndEmailType = {
  withEmail?: boolean;
};

const DreAndEmail: React.FC<DreAndEmailType> = ({ withEmail = false }) => (
  <div className={styles.dreSection}>
    {withEmail && <p>margotmartin@grubbco.com</p>}

    <p className={styles.dreCopy}>DRE 02145679</p>
  </div>
)

export default DreAndEmail;
