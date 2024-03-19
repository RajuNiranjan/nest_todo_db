"use client";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2} className="w-max">
      <Pagination
        count={3}
        variant="outlined"
        color="primary"
        shape="rounded"
        className="w-16 h-8 text-sm"
      />
    </Stack>
  );
}
