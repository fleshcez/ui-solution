import express = require("express");

export const panelRouter = express.Router({mergeParams: true});
panelRouter.route('/:panelId').get((req, res) => {
  const panelId = req.params.panelId;
  console.log(panelId);
  res.send(`Resolving ${panelId}`);
});
