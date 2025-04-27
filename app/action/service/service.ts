import { prisma } from "@/lib/utils"
import { redirect } from "next/navigation";

export const updateService = async (data: FormData)=> {
    'use server'
    // console.log(data)

    // update service
    const updatedService = await prisma.service.update({
        where: {
            id: Number(data.get('id')),
        },
        data: {
            name: data.get("name") as string,
            description: data.get("description") as string,
        },
    });
    console.log("successfully updated", updatedService);
    redirect("/admin/service/list")
};