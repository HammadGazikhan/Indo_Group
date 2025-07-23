import employeeModal from "../../models/employee.modal.js";

// GET /admin/monthly-registrations
export const getMonthlyRegistrations = async (req, res) => {
  try {
    const result = await employeeModal.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formatted = result.map((item) => ({
      month: months[item._id - 1],
      registrations: item.count,
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching monthly stats", error: err.message });
  }
};

// GET /admin/stats
export const getAdminDashboardStats = async (req, res) => {
  try {
    const [
      totalEmployees,
      approvedEmployees,
      rejectedEmployees,
      pendingEmployees,
      terminatedEmployees,
    ] = await Promise.all([
      employeeModal.countDocuments(),
      employeeModal.countDocuments({ isApproved: "approved" }),
      employeeModal.countDocuments({ isApproved: "rejected" }),
      employeeModal.countDocuments({ isApproved: "pending" }),
      employeeModal.countDocuments({ terminationLetterSent: true }),
    ]);

    res.status(200).json({
      totalEmployees,
      approvedEmployees,
      rejectedEmployees,
      pendingEmployees,
      terminatedEmployees,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching dashboard stats",
      error: err.message,
    });
  }
};
