import React, { useState } from "react";
import { Box, IconButton, Popover, Typography, Divider, Grid, Link } from "@mui/material";
import telegramIcn from '../../../assets/icon/telegram.png'
import githubIcn from '../../../assets/icon/github.png'
import webIcn from '../../../assets/icon/web.png'
import whatsappIcn from '../../../assets/icon/whatsapp.png'
import linkedinIcn from '../../../assets/icon/linkedin.png'
import youtubIcn from '../../../assets/icon/youtube.png'
import ShareIcon from '@mui/icons-material/Share';


const socialLinks = [
    { link: "https://t.me/NimaSm73", file: telegramIcn, name: 'Telegram' },
    { link: "https://wa.me/+989156969259", file: whatsappIcn, name: 'Whatsapp'  },
    { link: "https://github.com/nima-moghaddam", file: githubIcn, name: 'Github'  },
    { link: "https://linkedin.com/in/nima-moghaddam-61622321a", file: linkedinIcn, name: 'Linkedin'  },
    { link: "https://myportfolio-e5675.web.app/", file: webIcn, name: 'Portfolio' },
    { link: "https://www.youtube.com/channel/UClOkRfCapQQzM65mJPtylxQ", file: youtubIcn, name: 'Youtube' },
]

const ContactLink = ({classes}) => {
    const [open, setOpen] = useState(null);

    return (
        <>
            <IconButton
                sx={{ ml: 2, ...classes }}
                onClick={event => setOpen(event.currentTarget)}
            >
                <ShareIcon />
            </IconButton>
            <Popover
                elevation={0}
                anchorEl={open}
                open={Boolean(open)}
                PaperProps={{
                    sx: {
                    mt: 1.8,
                    boxShadow: '0 5px 10px rgb(30 32 37 / 12%)',
                    width: {xs: '100%', sm: '320px'},
                    maxWidth: '100%',
                    backgroundColor: 'primary.navWhite',
                    left: { xs: '0 !important', sm: '80px !important' },
                    }
                }}
                onClose={() => setOpen(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            >
                <Typography sx={{ color: 'text.black', p:3, fontWeight: '600' }}> لینک های ارتباطی :</Typography>
                <Divider variant="string" />
                <Grid container sx={{ p: 1 }} columns={{ xs: 12, sm: 9}}>
                    {socialLinks.map((item) => (
                    <Grid item xs={4} sm={3} key={item.file}>
                        <Link
                            href={item.link}
                            underline="none"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: 'text.dark',  }}
                        >
                        <Box
                            sx={{
                            '&:hover': { backgroundColor: 'primary.hover' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: '3px'
                            }}
                        >
                            <img height={'24px'} src={item.file} alt={item.name} />
                            <Typography sx={{mt: 1}}>{item.name}</Typography>
                        </Box>
                        </Link>
                    </Grid>
                    ))}
                </Grid>
            </Popover>
        </>
    )
}

export default ContactLink