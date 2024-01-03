import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion({heading}) {

    return (
      <div>
        <Accordion sx={{background: "transparent", color: "var(--color-white)", boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "var(--color-white)"}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5 >{heading}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                    Amet minim mollit non deserunt ullamco est sit <br />
                    aliqua dolor do amet sint. Velit officia consequatduis <br />
                    enim velit mollit Exer. Amet minim mollit non deserunt <br />
                    ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                    consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
    </div>
    )
}