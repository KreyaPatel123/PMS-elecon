// // const Project = require("../models/Project")
// // exports.createProject = async(request,response)=>{
// //     try{
// //         const {shortCode,domain,size,severity,type,projectTitle,description,projectOwner,spocPerson,spocCompanyDivision,deliveryHead,projectManager,costUnit,totalCost}=request.body;
// //     }
// //     catch(error){
// //       console.log(error);  
// //     }
// // }
const Project = require("../models/Project");
const { createShortCode } = require("./Code");

exports.createProject = async (request, response) => {
  try {
    const {
      domain,
      size,
      severity,
      type,
      projectTitle,
      description,
      projectOwner,
      spocPerson,
      spocCompanyDivision,
      deliveryHead,
      projectManager,
      costUnit,
      totalCost
    } = request.body;

    if (
      !domain ||
      !projectTitle ||
      !description ||
      !projectOwner ||
      !spocPerson ||
      !spocCompanyDivision ||
      !deliveryHead ||
      !projectManager ||
      !totalCost
    ) {
      return response.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    //Generate 6-digit unique short code
    const codeDoc = await createShortCode();

    // create project
    let project = await Project.create({
      shortCode: codeDoc._id, // ObjectId store
      domain,
      size,
      severity,
      type,
      projectTitle,
      description,
      projectOwner,
      spocPerson,
      spocCompanyDivision,
      deliveryHead,
      projectManager,
      costUnit,
      totalCost
    });

    // populate shortCode to show actual 6-digit code
    project = await Project.findById(project._id)
      .populate("shortCode", "shortCode")   
      .populate("domain", "name");

    return response.status(201).json({
      success: true,
      message: "Project created successfully",
      data: {
        ...project._doc,
        shortCode: project.shortCode.shortCode // ONLY 6-digit code
      }
    });

  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};























































// const Project = require("../models/Project");
// const { createShortCode } = require("./Code");

// exports.createProject = async (request, response) => {
//   try {
//     const {
//       domain,
//       size,
//       severity,
//       type,
//       projectTitle,
//       description,
//       projectOwner,
//       spocPerson,
//       spocCompanyDivision,
//       deliveryHead,
//       projectManager,
//       costUnit,
//       totalCost
//     } = request.body;

//     if (
//       !domain ||
//       !projectTitle ||
//       !description ||
//       !projectOwner ||
//       !spocPerson ||
//       !spocCompanyDivision ||
//       !deliveryHead ||
//       !projectManager ||
//       !totalCost
//     ) {
//       return response.status(400).json({
//         success: false,
//         message: "Required fields missing"
//       });
//     }

//     // 🔍 STEP 1: Check if project already exists
//     let existingProject = await Project.findOne({ projectTitle })
//       .populate("shortCode", "shortCode")
//       .populate("domain", "name");

//     if (existingProject) {
//       // ✅ SAME PROJECT → SAME 6 DIGIT CODE
//       return response.status(200).json({
//         success: true,
//         message: "Project already exists",
//         data: {
//           ...existingProject._doc,
//           shortCode: existingProject.shortCode.shortCode
//         }
//       });
//     }

//     // 🔥 STEP 2: Generate shortcode ONLY FIRST TIME
//     const codeDoc = await createShortCode();

//     let project = await Project.create({
//       shortCode: codeDoc._id,
//       domain,
//       size,
//       severity,
//       type,
//       projectTitle,
//       description,
//       projectOwner,
//       spocPerson,
//       spocCompanyDivision,
//       deliveryHead,
//       projectManager,
//       costUnit,
//       totalCost
//     });

//     project = await Project.findById(project._id)
//       .populate("shortCode", "shortCode")
//       .populate("domain", "name");

//     return response.status(201).json({
//       success: true,
//       message: "Project created successfully",
//       data: {
//         ...project._doc,
//         shortCode: project.shortCode.shortCode
//       }
//     });

//   } catch (error) {
//     console.log(error);
//     return response.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message
//     });
//   }
// };
