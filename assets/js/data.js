/* =============================================================================
   AI-ART site data — edit this file to update the website.
   No build step: save, commit, push.
   ============================================================================= */

window.AIART = {};

/* -----------------------------------------------------------------------------
   Links
   ----------------------------------------------------------------------------- */
AIART.links = {
  github: "https://github.com/ai-aiart",
};


/* -----------------------------------------------------------------------------
   Publications
   type:     "journal" | "conference" | "preprint" | "abstract"
   doi:      DOI without https://doi.org/   (optional)
   arxiv:    arXiv id                       (optional)
   url:      any other link to the paper    (optional)
   code:     GitHub repository URL          (optional)
   selected: true → also shown on the home page
   ----------------------------------------------------------------------------- */
AIART.publications = [
  {
    year: 2026,
    title: "Efficient KernelSHAP Explanations for Patch-based 3D Medical Image Segmentation",
    authors: ["R. C. Brioso", "G. Sichili", "D. Dei", "N. Lambri", "P. Mancosu", "M. Scorsetti", "D. Loiacono"],
    venue: "International Joint Conference on Neural Networks (IJCNN)",
    type: "conference",
    doi: "10.1109/IJCNN69854.2026.11729456",
    arxiv: "2604.11775",
    selected: true,
  },
  {
    year: 2026,
    title: "Budget-Aware Uncertainty for Radiotherapy Segmentation QA Using nnU-Net",
    authors: ["R. C. Brioso", "L. Mondo", "D. Dei", "N. Lambri", "P. Mancosu", "M. Scorsetti", "D. Loiacono"],
    venue: "arXiv preprint",
    type: "preprint",
    arxiv: "2604.11798",
    code: "https://github.com/RicardoCQB/nnunet-segmentation-uncertainty",
    selected: true,
  },
  {
    year: 2026,
    title: "Generating synthetic computed tomography for radiotherapy: SynthRAD2025 challenge report",
    authors: ["V. Rogowski", "M. Terpstra", "N. Wahl", "F. Kamp", "E. van der Bijl", "A. Galapon", "C. Kurz", "et al.", "R. C. Brioso", "D. Loiacono", "G. Landry", "A. Thummerer", "M. Maspero"],
    venue: "arXiv preprint (under review, Medical Image Analysis)",
    type: "preprint",
    arxiv: "2605.13555",
    code: "https://github.com/RicardoCQB/synthrad2025_tinyunet",
  },
  {
    year: 2025,
    title: "ARTInp: CBCT-to-CT with Gap Inpainting for Adaptive Radiation Therapy",
    authors: ["R. C. Brioso", "L. Crespi", "A. Seghetto", "D. Dei", "N. Lambri", "P. Mancosu", "M. Scorsetti", "D. Loiacono"],
    venue: "Computational Intelligence Methods for Bioinformatics and Biostatistics, Springer",
    type: "chapter",
    doi: "10.1007/978-3-032-35064-0_18",
    arxiv: "2502.04898",
    selected: true,
  },
  {
    year: 2025,
    title: "Automatic base-dose planning for a robust field junction in total marrow irradiation",
    authors: ["N. Lambri", "D. Dei", "R. C. Brioso", "L. Crespi", "D. Loiacono", "M. Scorsetti", "P. Mancosu"],
    venue: "Physica Medica",
    type: "journal",
    doi: "10.1016/j.ejmp.2025.104898",
  },
  {
    year: 2024,
    title: "Investigating Gender Bias in Lymph-node Segmentation with Anatomical Priors",
    authors: ["R. C. Brioso", "D. Dei", "N. Lambri", "P. Mancosu", "M. Scorsetti", "D. Loiacono"],
    venue: "MICCAI 2024 Workshop (FAIMI / EPIMI)",
    type: "conference",
    arxiv: "2409.15888",
    selected: true,
  },
  {
    year: 2024,
    title: "Machine learning and lean six sigma for targeted patient-specific quality assurance of volumetric modulated arc therapy plans",
    authors: ["N. Lambri", "D. Dei", "G. Goretti", "L. Crespi", "R. C. Brioso", "M. Pelizzoli", "S. Parabicoli", "A. Bresolin", "P. Gallo", "F. L. La Fauci", "F. Lobefalo", "L. Paganini", "G. Reggiori", "D. Loiacono", "C. Franzese", "S. Tomatis", "M. Scorsetti", "P. Mancosu"],
    venue: "Physics and Imaging in Radiation Oncology",
    type: "journal",
    doi: "10.1016/j.phro.2024.100617",
  },
  {
    year: 2024,
    title: "Deep learning-based optimization of field geometry for total marrow irradiation delivered with volumetric modulated arc therapy",
    authors: ["N. Lambri", "G. Longari", "D. Loiacono", "R. C. Brioso", "L. Crespi", "C. Galdieri", "F. Lobefalo", "G. Reggiori", "R. Rusconi", "S. Tomatis", "L. Bellu", "S. Bramanti", "E. Clerici", "C. De Philippis", "D. Dei", "P. Navarria", "C. Carlo-Stella", "C. Franzese", "M. Scorsetti", "P. Mancosu"],
    venue: "Medical Physics",
    type: "journal",
    doi: "10.1002/mp.17089",
  },
  {
    year: 2024,
    title: "Deep learning and atlas-based models to streamline the segmentation workflow of total marrow and lymphoid irradiation",
    authors: ["D. Dei", "N. Lambri", "L. Crespi", "R. C. Brioso", "D. Loiacono", "E. Clerici", "L. Bellu", "C. De Philippis", "P. Navarria", "S. Bramanti", "C. Carlo-Stella", "R. Rusconi", "G. Reggiori", "S. Tomatis", "M. Scorsetti", "P. Mancosu"],
    venue: "La Radiologia Medica",
    type: "journal",
    doi: "10.1007/s11547-024-01760-8",
    selected: true,
  },
  {
    year: 2024,
    title: "Deep Learning-Based Auto-Segmentation of Planning Target Volume for Total Marrow and Lymph Node Irradiation",
    authors: ["R. C. Brioso", "D. Dei", "N. Lambri", "D. Loiacono", "P. Mancosu", "M. Scorsetti"],
    venue: "arXiv preprint",
    type: "preprint",
    arxiv: "2402.06494",
  },
  {
    year: 2024,
    title: "Deep Learning Segmentation of Lymph Node Segmentation for Adaptive Radiotherapy using nnU-Net",
    authors: ["R. C. Brioso", "D. Dei", "N. Lambri", "D. Loiacono", "P. Mancosu", "M. Scorsetti"],
    venue: "ESTRO 2024 · Radiotherapy and Oncology (abstract)",
    type: "abstract",
    doi: "10.1016/s0167-8140(24)02713-0",
  },
  {
    year: 2024,
    title: "Whole body MRI for contouring of total marrow and lymph node irradiation",
    authors: ["D. Dei", "P. Navarria", "L. Bellu", "E. Clerici", "N. Lambri", "R. C. Brioso", "L. Crespi", "D. Loiacono", "S. Bramanti", "M. Scorsetti", "P. Mancosu"],
    venue: "ESTRO 2024 · Radiotherapy and Oncology (abstract)",
    type: "abstract",
    doi: "10.1016/s0167-8140(24)01288-x",
  },
  {
    year: 2023,
    title: "Multi-center validation of an automatic planning tool for lower-extremities TMI and TBI",
    authors: ["P. Mancosu", "N. Lambri", "G. D'Onofrio", "F. Lliso", "F. Luis-Simón", "S. Broggi", "D. Dei", "R. C. Brioso", "L. Crespi", "D. Loiacono", "G. Reggiori", "M. Scorsetti", "S. Tomatis"],
    venue: "Physica Medica (abstract)",
    type: "abstract",
    doi: "10.1016/j.ejmp.2023.102779",
  },
  {
    year: 2023,
    title: "Segmentation of Planning Target Volume in CT Series for Total Marrow Irradiation Using U-Net",
    authors: ["R. C. Brioso", "D. Dei", "C. Franzese", "N. Lambri", "D. Loiacono", "P. Mancosu", "M. Scorsetti"],
    venue: "IEEE 36th International Symposium on Computer-Based Medical Systems (CBMS)",
    type: "conference",
    doi: "10.1109/CBMS58004.2023.00265",
    arxiv: "2304.02353",
    selected: true,
  },
  {
    year: 2023,
    title: "Semi-supervised Multi-structure Segmentation in Chest X-Ray Imaging",
    authors: ["R. C. Brioso", "J. Pedrosa", "A. M. Mendonça", "A. Campilho"],
    venue: "IEEE 36th International Symposium on Computer-Based Medical Systems (CBMS)",
    type: "conference",
    doi: "10.1109/CBMS58004.2023.00325",
  },
  {
    year: 2023,
    title: "Impact of the Extremities Positioning on the Set-Up Reproducibility for the Total Marrow Irradiation Treatment",
    authors: ["N. Lambri", "S. L. Antonetti", "D. Dei", "L. Bellu", "S. Bramanti", "R. C. Brioso", "C. Carlo-Stella", "I. Castiglioni", "E. Clerici", "L. Crespi", "C. De Philippis", "C. Galdieri", "D. Loiacono", "P. Navarria", "G. Reggiori", "R. Rusconi", "S. Tomatis", "M. Scorsetti", "P. Mancosu"],
    venue: "Current Oncology",
    type: "journal",
    doi: "10.3390/curroncol30040309",
  },
  {
    year: 2023,
    title: "Internal Guidelines for Reducing Lymph Node Contour Variability in Total Marrow and Lymph Node Irradiation",
    authors: ["D. Dei", "N. Lambri", "S. Stefanini", "V. Vernier", "R. C. Brioso", "L. Crespi", "E. Clerici", "L. Bellu", "C. De Philippis", "D. Loiacono", "P. Navarria", "G. Reggiori", "S. Bramanti", "M. Rodari", "S. Tomatis", "A. Chiti", "C. Carlo-Stella", "M. Scorsetti", "P. Mancosu"],
    venue: "Cancers",
    type: "journal",
    doi: "10.3390/cancers15051536",
  },
];

/* -----------------------------------------------------------------------------
   People (contact page). Copy a block to add someone.
   ----------------------------------------------------------------------------- */
AIART.people = [
  {
    name: "Ricardo Coimbra Brioso",
    role: "PhD in Computer Science, Politecnico di Milano",
    bio: "Biomedical engineer working on computer vision for radiotherapy: auto-segmentation, CBCT-to-CT synthesis, uncertainty and explainability for clinical deployment.",
    email: "ricardo.brioso@polimi.it",
    links: {
      github: "https://github.com/RicardoCQB",
      // scholar: "https://scholar.google.com/citations?user=...",
      // linkedin: "https://www.linkedin.com/in/...",
      // orcid: "https://orcid.org/0000-...",
    },
  },
  // {
  //   name: "Jane Doe",
  //   role: "PhD student",
  //   bio: "…",
  //   email: "jane.doe@example.org",
  //   links: { github: "…", scholar: "…" },
  // },
];

/* -----------------------------------------------------------------------------
   Projects (projects page). Empty → "coming soon" placeholder.
   status: "active" | "completed"
   ----------------------------------------------------------------------------- */
AIART.projects = [
  // {
  //   title: "AUTOMI",
  //   status: "completed",
  //   years: "2021–2025",
  //   summary: "Deep-learning auto-segmentation for total marrow and lymph node irradiation.",
  //   tags: ["segmentation", "TMLI"],
  //   links: { code: "https://github.com/...", paper: "https://doi.org/..." },
  // },
];
