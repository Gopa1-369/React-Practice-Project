import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import { useState } from "react";
const ContactForm = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };




  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button 
            text='VIA SUPPORT CHAT'
            icon={<MdMessage/>}
            
            />
            <Button 
            text='VIA CALL'
            icon={<FaPhoneAlt/>}
            
            />

        </div>
        <Button 
          isOutline={true}
            text='VIA EMAIL FORM'
            icon={<HiMail/>}
            
            />

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"></input>
                </div>
                <div className={styles.form_control}>
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="name"></input>
                </div>
                <div className={styles.form_control}>
                <label htmlFor="text">TEXT</label>
                <textarea name="text"></textarea>
                </div>
                <div 
                 style={{
                    display: "flex",
                    justifyContent: "end",

                  }}
                >
                    <Button text={'SUBMIT'}></Button>
                </div>

                <div>{name + " " + email + " " + text}</div>
            </form>
            

    </div>

    <div className={styles.contact_image}>
<img src="/images/Service.svg" alt="contact image"  />
    </div>
   </section>
  )
}

export default ContactForm