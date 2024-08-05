import mongoose, { Connection } from "mongoose"

type ConnectionObject = {
	isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Database is Already Connected")
		return
	}

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

		connection.isConnected = db.connections[0].readyState

		console.log("DB is Connected Successfully")
	} catch (error) {
		console.log("Database Connection FAiled", error);

		process.exit(1)
	}
}

export default dbConnect;
