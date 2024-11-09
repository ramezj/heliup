"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Team } from "@prisma/client";

export async function getOrganizationBySlug(slug: string) {
    try {
        const team = await prisma.team.findFirst({
            where: {
                slug: {
                  equals: slug,
                  mode: 'insensitive',
                },
              },
            include: {
                jobs: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });
        if(!team) {
            return {
                error:true,
                message: "Organization doesnt exist"
            }
        }
        const uniqueLocations = await prisma.job.findMany({
            where: {
                teamId: team.id,
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
        const uniqueEmploymentTypes = await prisma.job.findMany({
            where: {
                teamId: team.id,
            },
            select: {
                type: true
            },
            distinct: ['type']
        });
        const types = uniqueEmploymentTypes.map(job => job.type);
        return { 
            error: false,
            team,
            locations:locations,
            types: types
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
        const organization = await prisma.team.findFirst({
            where: {
                ownerId: {
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
        const organization = await prisma.team.findFirst({
            where: {
                ownerId: {
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