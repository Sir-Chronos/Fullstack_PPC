import sequelize from "../config/sequelize";
import PPC from "../models/PPC";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Error:", err));

async function CreatePPC(occupationArea: string, course: string, version: Date) {
  try {
    const ppc = await PPC.create({ occupationArea, course, version });
    console.log("PPC created successfully:", ppc.id);
    return ppc;
  } catch (error) {
    console.error("Error creating PPC:", error);
    throw error;
  }
}

async function ReadAllPPCs() {
  try {
    const ppcs = await PPC.findAll();
    console.log("PPCs retrieved successfully:", ppcs);
    return ppcs;
  } catch (error) {
    console.error("Error retrieving PPCs:", error);
    throw error;
  }
}

async function ReadPPC(id: number) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      console.log("PPC retrieved successfully:", ppc);
      return { success: true, data: ppc };
    } else {
      console.log("PPC not found");
      return { success: false, message: "PPC not found" };
    }
  } catch (error) {
    console.error("Error reading PPC:", error);
    throw { success: false, message: "Error reading PPC", error };
  }
}

async function UpdatePPC(id: number, occupationArea: string, course: string, version: Date) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      ppc.occupationArea = occupationArea;
      ppc.course = course;
      ppc.version = version;
      await ppc.save();
      console.log("PPC updated successfully:", ppc);
      return ppc;
    } else {
      console.log("PPC not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating PPC:", error);
    throw error;
  }
}

async function DeletePPC(id: number) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      await ppc.destroy();
      console.log("PPC deleted successfully");
      return true;
    } else {
      console.log("PPC not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting PPC:", error);
    throw error;
  }
}

export { CreatePPC, ReadAllPPCs, ReadPPC, UpdatePPC, DeletePPC };