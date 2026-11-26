import dotenv from "dotenv";
import dns from "dns";
import app from "./app.js";
import connectDB from "./src/config/db.js"
dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        dns.setServers([
            "8.8.8.8",
            "8.8.4.4"
        ])
        // connect db first
        await connectDB();

        // start express server
        
        app.listen(port , () => {
            console.log(`Server is Runing on http://localhost:${port}`)
        })
    } catch (error) {
        console.error(`Server Startup Failed : ${error.message}`);
        process.exit(1);
    }
}

startServer();  