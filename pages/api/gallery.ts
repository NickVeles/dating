// pages/api/gallery.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

type ImageResource = {
  id: string;
  url: string;
  alt: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageResource[] | { error: string }>
) {
  try {
    const result = await cloudinary.search
      .expression("folder:dating")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    const images: ImageResource[] = result.resources.map((img: any) => ({
      id: img.asset_id,
      url: img.secure_url,
      alt: img.public_id,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
}
