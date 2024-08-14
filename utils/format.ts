import { Status } from "@prisma/client";

export const formatApplicantType = (type:Status) => {
    switch (type) {
        case 'SUBMITTED':
            return 'Submitted';
        case "UNDERREVIEW":
            return 'Under Review';
        case "HIRED":
            return 'Hired';
        case "OFFER":
            return 'Offer';
        case "INTERVIEW":
            return "Interview"
        case "REJECTED":
            return "Rejected"
        default:
            return type;
    }
  };