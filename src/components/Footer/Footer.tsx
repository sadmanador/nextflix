import React from "react";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#141414",
        color: "#ffffff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Box mb={2}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "FAQ",
              "Help Center",
              "Terms of Use",
              "Privacy",
              "Cookie Preferences",
              "Corporate Information",
            ].map((link) => (
              <li key={link} style={{ margin: "5px 0" }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": {
                      color: "#e50914",
                      transition: "color 0.3s",
                    },
                  }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        <Box mb={2}>
          <Image src="/assets/logo.png" alt="Logo" width={90} height={30} />
        </Box>
      </Box>

      <Box borderTop="1px solid #333" pt={1}>
        <Typography variant="body2" color="inherit">
          © 2024 Netflix, Inc.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
