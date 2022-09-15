import styles from '../styles/components/Testimonial.module.css';
import React, { useState, useEffect } from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai';

const Testimonial = ( { data: { testimonialData } }) => {
  const [originalData, setOriginalData] = useState([]);
  const [testimonialTitle, setTestimonialTitle] = useState([]);
  const [currentDeskTopNum, setCurrentDeskTopNum] = useState(0);
  const [currentMobileNum, setCurrentMobileNum] = useState(0);
  const [selectedDeskTopData, setSelectedDeskTopData] = useState([]);
  const [mobileSelectedData, setMobileSelectedData] = useState([]);

  const displayNumDeskTop = 3;
  const displayNumMobile = 1;

  const getSelectedData = (data, currentNum, displayNum) =>
    data.filter((d, index) => (index >= currentNum && index < (currentNum+displayNum)))

  useEffect(() => {
    const { title, testimonials } = testimonialData[0];
    setOriginalData(testimonials);
    setTestimonialTitle(title);
    setSelectedDeskTopData(getSelectedData(testimonials, 0, displayNumDeskTop));
    setMobileSelectedData(getSelectedData(testimonials, 0, displayNumMobile));
  }, [
    testimonialData
  ]);

  const prevTestimonial = (
    data,
    currentNum,
    displayNum,
    setCurrentNum,
    setSelectedData) => {
      const newCurrentNum = currentNum-displayNum;
      setCurrentNum(newCurrentNum);
      setSelectedData(getSelectedData(data, newCurrentNum, displayNum));
  };

  const nextTestimonial = (
    data,
    currentNum,
    displayNum,
    setCurrentNum,
    setSelectedData) => {
      const newCurrentNum = currentNum+displayNum;
      setCurrentNum(newCurrentNum);
      setSelectedData(getSelectedData(data, newCurrentNum, displayNum));
  };

  return (
    <div className={styles.container}>
      {
        (testimonialTitle !== '') ?
        <h1 className={styles.title}>
          { testimonialTitle }
        </h1> : ''
      }

      { /* desktop view desplay three testimonial */ }

      <div className={`${styles.desktop} ${styles.cards}`}>
        {
          (currentDeskTopNum-displayNumDeskTop >= 0 ) ?
            <button className={styles.leftIcon} 
            onClick={() => prevTestimonial(
              originalData,
              currentDeskTopNum,
              displayNumDeskTop,
              setCurrentDeskTopNum,
              setSelectedDeskTopData
            )}>
              <AiOutlineCaretLeft />
            </button> : ''
        }
      <ul className={`${styles.gridContainer}`}>
        {
          selectedDeskTopData &&
          selectedDeskTopData.map((data, index) => (
            <li key={index} className={styles.list}>
              <div className={styles.stars}>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
              </div>
              <p className={styles.comments}>
                &quot; { data.comment} &quot;
              </p>
              <p className={styles.name}>
                - { data.name }
              </p>
            </li>
          ))
        }
      </ul>
      {
        (originalData.length > currentDeskTopNum+displayNumDeskTop) ?
        <button className={styles.rightIcon}
          onClick={() => nextTestimonial(
            originalData,
            currentDeskTopNum,
            displayNumDeskTop,
            setCurrentDeskTopNum,
            setSelectedDeskTopData
          )}>
          <AiOutlineCaretRight />
        </button> : ''
      }
      </div>

      { /* mobile view desplay one testimonial */ }

      <div className={styles.mobile}>
      {
        (currentMobileNum-displayNumMobile >= 0 ) ?
          <button className={styles.leftIcon}
            onClick={() => prevTestimonial(
              originalData,
              currentMobileNum,
              displayNumMobile,
              setCurrentMobileNum,
              setMobileSelectedData
            )}>
            <AiOutlineCaretLeft />
          </button> : ''
      }
      <ul className={`${styles.gridContainer}`}>
        {
          mobileSelectedData &&
          mobileSelectedData.map((data, index) => (
            <li key={index} className={styles.list}>
              <div className={styles.stars}>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
                <span>
                  <GiRoundStar />
                </span>
              </div>
              <p className={styles.comments}>
                &quot; { data.comment } &quot;
              </p>
              <p className={styles.name}>
                - { data.name }
              </p>
            </li>
          ))
        }
      </ul>
      {
        (originalData.length > currentMobileNum+displayNumMobile) ?
        <button className={styles.rightIcon}
          onClick={() => nextTestimonial(
            originalData,
            currentMobileNum,
            displayNumMobile,
            setCurrentMobileNum,
            setMobileSelectedData
          )}>
          <AiOutlineCaretRight />
        </button> : ''
      }
      </div>
    </div>
  )
};

export default Testimonial;