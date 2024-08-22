"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export async function getOrganizationBySlug(slug: string) {
    try {
        const organization = await prisma.organization.findFirst({
            where: {
                slug: {
                  equals: slug,
                  mode: 'insensitive',
                },
              },
            include: {
                jobs: true
            }
        });
        if(!organization) {
            return {
                error:true,
                message: "Organization doesnt exist"
            }
        }
        const uniqueLocations = await prisma.job.findMany({
            where: {
                organizationId: organization.id,
                location: { 
                    not: null
                }
            },
            select: {
                location: true
            },
            distinct: ['location']
        })
        const locations = uniqueLocations.map(job => job.location);
        return { 
            error: false,
            organization,
            locations:locations
        }
    } catch (error) {
        return {
            error: true,
            message: "something went wrong, please try again later."
        }
    }
}

export async function getOrganizationByUserId(userId: string) {
    try {
        const organization = await prisma.organization.findFirst({
            where: {
                userId: {
                  equals: userId,
                  mode: 'insensitive',
                },
              },
            include: {
                jobs: {
                    include: {
                        applicants: true
                    }
                }
            }
        });
        if(!organization) {
            return {
                error:true,
                message: "Organization doesnt exist"
            }
        }
        return { 
            error: false,
            organization
        }
    } catch (error) {
        return {
            error: true,
            message: "Internal Server Error"
        }
    }
}

export async function getOrganizationByUserIdSortedByApplicants(userId: string) {
    try {
        const organization = await prisma.organization.findFirst({
            where: {
                userId: {
                  equals: userId,
                  mode: 'insensitive',
                },
              },
            include: {
                jobs: {
                    include: {
                        applicants: true
                    },
                    orderBy: {
                        applicants: {
                            _count: 'asc'
                        }
                    }
                },
            }
        });
        if(!organization) {
            return {
                error:true,
                message: "Organization doesnt exist"
            }
        }
        return { 
            error: false,
            organization
        }
    } catch (error) {
        return {
            error: true,
            message: "Internal Server Error"
        }
    }
}