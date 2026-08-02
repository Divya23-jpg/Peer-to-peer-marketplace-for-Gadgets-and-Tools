exports.createListing = async (req, res) => {
  try {
    if (!req.session.renter) {
      console.log("Session renter missing:", req.session);
      return res.status(403).send("Only renters can add listings");
    }

    const { title, description, category, daily_rate, available_from, available_until } = req.body;
    const availability = { from: available_from, until: available_until };

    await listing.create({
      title,
      description,
      category,
      daily_rate,
      photo_url: req.files ? req.files.map(f => f.filename).join(",") : null,
      availability,
      renter_id: req.session.renter.id
    });

    res.redirect("listing.html");
  } catch (err) {
    console.error("Error creating listing:", err);
    res.status(500).send("Error creating listing");
  }
};
