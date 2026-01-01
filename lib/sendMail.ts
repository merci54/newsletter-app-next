import axios from "axios"

export const sendMail = async (email: string) => {
    const res = await axios.post('/api/send-mail', {email});
    return res.data;
}