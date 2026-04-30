import mongoose from 'mongoose'

const aboutSchema = new mongoose.Schema(
    {
        
    },
     { timestamps : true }
)


const About = mongoose.model("About", aboutSchema)
export default About;
