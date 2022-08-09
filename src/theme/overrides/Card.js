// ----------------------------------------------------------------------

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z16,
          borderRadius: theme.shape.borderRadius,
          position: 'relative',
          zIndex: 0 // Fix Safari overflow: hidden with border radius
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: {
          variant: 'body2',
          marginTop: theme.spacing(0.5)
        }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(1.5, 1.5, 0)
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1.5),
          '&:last-child': {
            paddingBottom: theme.spacing(1.5)
          }
        }
      }
    }
  };
}
