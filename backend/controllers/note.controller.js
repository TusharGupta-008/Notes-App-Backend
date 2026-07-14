import noteModel from "../models/note.model.js";

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    if (!title || !description) {
      return res.status(400).json({
        message: "Please fill the details",
      });
    }

    const creation = await noteModel.create({
      title,
      description,
      userId,
    });
    res.status(201).json({
      creation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ userId: req.user.id });
    res.status(200).json({
      message: "Here are your notes",
      notes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

const singleNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    if (!note) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(200).json({
      message: "here is your note",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    if (!note) {
      return res.status(404).json({
        message: "No note found",
      });
    }
    if (note.userId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }
    const deletedNote = await noteModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Note deleted",
      deletedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      {
        title,
        description,
      },
      {
        new: true,
      },
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Note Updated",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { createNote, getNotes, singleNote, deleteNote };
