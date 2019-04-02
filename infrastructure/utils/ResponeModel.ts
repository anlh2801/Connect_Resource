// export function buildResOK(message, data) {
//     return {
//         status : 200,
//         resDetails : {
//             success: "true",
//             message,
//             data
//         }

//       };
// }

export function buildResOKAllType(data: any): {status: number, data: any} {
    return {
        data,
        status : 200
    };
}
