import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

export async function uploadImage(file: string): Promise<string> {
    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: "X-clone",
        });
        return result.secure_url;
    } catch (error) {
        console.error("Cloudinary upload failed error", error);
        throw new Error("Image upload filed");
    }
}
