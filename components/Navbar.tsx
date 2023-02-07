'use client';
import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
const Navbar = () => {
  return (
    //   By import motion, youimport { use } from 'react';
    //  get access to special elements you can use, by simply adding "motion." to the begining of the element name and then you can pass special props to it.
    <motion.nav
      // if we didn't creat the newVariant variable, we could just pass the object inline here. Keeping some of the logic in the utils/motion helps to keep the actual presentation clean.
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      navbar
    </motion.nav>
  );
};

export default Navbar;
