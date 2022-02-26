import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const items = await prisma.item.findMany({
    where: {
      category: "Recycled",
    },
  });
  res.json(items);
};

export default handle;
