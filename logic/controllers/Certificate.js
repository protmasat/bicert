const Certficate = require("../models/certificate");

const CreateCertficate = async (req, res, next) => {
  const {
    IdNumber,
    placeBorn,
    name,
    sex,
    fathername,
    fatherPoB,
    mothername,
    motherPoB,
    birthDate,
    registrarGeneral,
  } = req.body;

  if (
    !IdNumber ||
    !placeBorn ||
    !name ||
    !sex ||
    !fathername ||
    !fatherPoB ||
    !mothername ||
    !motherPoB ||
    !birthDate ||
    !registrarGeneral
  ) {
    return res.status(400).json({
      sucess: false,
      message: "All fields are required!",
    });
  }

  const newCert = await Certficate.create({
    IdNumber,
    placeBorn,
    name,
    sex,
    fathername,
    fatherPoB,
    mothername,
    motherPoB,
    birthDate,
    registrarGeneral,
  });

  if (!newCert) {
    return res.status(400).json({
      sucess: false,
      message: "Certificate not found",
    });
  }

  res.status(201).json({
    sucess: true,
    message: "Certificate generated",
    data: newCert,
  });
};

const GetCertificates = async (req, res) => {
  const certificates = await Certficate.find().sort({ createdAt: -1 });

  if (certificates.length === 0) {
    return res.status(404).json({
      sucess: false,
      message: "No certificate found",
    });
  }

  res.status(200).json({
    sucess: true,
    message: "Certificates retrieved",
    data: certificates,
  });
};

const GetCertificate = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucess: false,
      message: "Not valid certificate",
    });
  }
  const certificate = await Certficate.findById(id);

  if (!certificate) {
    return res.status(404).json({
      sucess: false,
      message: "certificate Not found",
    });
  }

  res.status(200).json({
    sucess: true,
    message: "Certificates retrieved",
    data: certificate,
  });
};

const UpdateCertificate = async (req, res) => {
  const { id } = req.params;

  const update = req.body;

  if (!id) {
    return res.status(400).json({
      sucess: false,
      message: "Not valid certificate",
    });
  }
  const certificate = await Certficate.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
    returnDocument: "after",
  });

  if (!certificate) {
    return res.status(404).json({
      sucess: false,
      message: "certificate Not found",
    });
  }

  res.status(200).json({
    sucess: true,
    message: "Certificates updated",
    data: certificate,
  });
};

module.exports = {
  CreateCertficate,
  GetCertificates,
  GetCertificate,
  UpdateCertificate,
};
