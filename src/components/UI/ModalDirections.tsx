import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { ReactNode } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface ModalDirectionsProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  content: ReactNode;
  actions: ReactNode;
}

const ModalDirections: React.FC<ModalDirectionsProps> = ({ open, onClose, title, content, actions }) => {
  return (
    <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ m: 3, p: 2 }} id="customized-dialog-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        {content}
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </BootstrapDialog>
  );
};

ModalDirections.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
};

export default ModalDirections;