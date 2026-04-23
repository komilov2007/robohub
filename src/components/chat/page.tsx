import {
  Box,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";
import IconSettings from "@/assets/icons/icon-settings.svg?react";
import IconUzum from "@/assets/icons/icon-uzum.svg?react";
import IconWb from "@/assets/icons/icon-wb.svg?react";
import IconOzon from "@/assets/icons/icon-ozon.svg?react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { AttachFileOutlined, EmojiEmotionsOutlined } from "@mui/icons-material";

const Chat = () => {
  return (
    <Box>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "64px",
          borderBottom: "1px solid #E8E8E9",
          position: "relative",
          padding: "20px 24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontFamily: "inter" }}>
            Chat
          </Typography>
          <Select
            sx={{
              height: "26px",
              background: "#F5F5F5",
              border: "0px solid #E4E4E4",
              borderRadius: "7px",
              fontSize: "13px",
              width: "153px",
            }}
            defaultValue="1"
          >
            <MenuItem
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: "8px",
                height: "30px",
                width: "180px",
              }}
              value={1}
            >
              Barcha platformalar
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: "8px",
                height: "30px",
                width: "180px",
              }}
              value={2}
            >
              Option 2
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: "8px",
                height: "30px",
                width: "180px",
              }}
              value={3}
            >
              Option 3
            </MenuItem>
          </Select>
        </Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontFamily: "inter",
            fontWeight: 500,
            border: "1px solid #E4E4E4",
            borderRadius: "8px",
            width: "122px",
            height: "36px",
            gap: "5px",
          }}
        >
          <IconSettings />
          Sozlamalar
        </Typography>
      </Box>
      {/* main chatlar yozishmalar */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* main aside  */}
        <Box
          sx={{
            borderRight: "1px solid #E8E8E9",
            width: "312px",
            height: "91.5vh",
          }}
        >
          <Box
            sx={{
              padding: "4px 24px",
              width: "312px",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                height: "52px",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "inter",
                color: "#00524F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 8px",
                borderBottom: "2px solid #00524F",
              }}
            >
              Barchasi
            </Typography>
            <Typography
              sx={{
                height: "52px",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "inter",
                color: "#00524F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 8px",
              }}
            >
              O'qilmagan
            </Typography>
            <Typography
              sx={{
                height: "52px",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "inter",
                color: "#00524F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 8px",
              }}
            >
              O'qilgan
            </Typography>
          </Box>
          {/* chat  */}
          <Box sx={{}}>
            {/* chat 1  */}
            <Box
              sx={{
                width: "264px",
                height: "57px",
                background: "#F3F4F4",
                borderRadius: "12px",
                padding: "8px 12px",
                margin: "4px 24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "inter",
                  }}
                >
                  Abror Xoliqov
                  <IconUzum />
                </Typography>
                <Typography
                  sx={{
                    color: "#73757C",
                    fontSize: "12px",
                    fontFamily: "inter",
                  }}
                >
                  10:13
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "inter",
                  }}
                >
                  Lorem ipsum dolor sit amet sdf siapdk
                </Typography>
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    background: "#FF4345",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Box>
            {/* chat 2  */}
            <Box
              sx={{
                width: "264px",
                height: "57px",
                borderRadius: "12px",
                padding: "8px 12px",
                margin: "4px 24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "inter",
                  }}
                >
                  Uchiha Sasuka
                  <IconWb />
                </Typography>
                <Typography
                  sx={{
                    color: "#73757C",
                    fontSize: "12px",
                    fontFamily: "inter",
                  }}
                >
                  10:00
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "inter",
                  }}
                >
                  Lorem ipsum dolor sit amet sdf siapdk
                </Typography>
              </Box>
            </Box>
            {/* chat 3  */}
            <Box
              sx={{
                width: "264px",
                height: "57px",
                borderRadius: "12px",
                padding: "8px 12px",
                margin: "4px 24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "inter",
                  }}
                >
                  Uchiha Sasuka
                  <IconOzon />
                </Typography>
                <Typography
                  sx={{
                    color: "#73757C",
                    fontSize: "12px",
                    fontFamily: "inter",
                  }}
                >
                  10:13
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "inter",
                  }}
                >
                  Lorem ipsum dolor sit amet sdf siapdk
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* yozishma  */}
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* stack header  */}
          <Box
            sx={{
              padding: "12px 24px",
              height: "72px",
              borderBottom: "1px solid #E8E8E9",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "inter",
              }}
            >
              <Typography
                sx={{
                  borderRadius: "50%",
                  background: "#e1f1f1",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00524F",
                  fontFamily: "inter",
                  fontWeight: 600,
                }}
              >
                AX
              </Typography>

              <Typography
                sx={{
                  fontFamily: "inter",
                  fontWeight: "500",
                }}
              >
                Project Indomie
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <LocalPhoneIcon />
              <VideocamIcon />
              <MoreHorizIcon />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#73757C",
                width: "120px",
                height: "30px",
                border: "1px solid #E8E8E9",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              xabar yo'q
            </Typography>
          </Box>
          {/* footer  */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "64px",
              borderTop: "1px solid #E8E8E9",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            <InputBase
              sx={{
                width: "708px",
              }}
              placeholder="Shu yerga yozing..."
            ></InputBase>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <EmojiEmotionsOutlined />
              <AttachFileOutlined />
              <Typography>Jo'natish</Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(Chat);
