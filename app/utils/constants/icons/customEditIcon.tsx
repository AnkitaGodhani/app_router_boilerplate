import { SvgIcon, SvgIconProps } from "@mui/material";

const CustomEditIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M4.25095 11.852L10.1086 4.27698C10.4269 3.86849 10.5401 3.39621 10.434 2.91534C10.342 2.47818 10.0732 2.06252 9.66996 1.7472L8.68661 0.966045C7.83061 0.285225 6.76945 0.35689 6.16105 1.13804L5.50313 1.99157C5.41823 2.09836 5.43946 2.25602 5.54557 2.34202C5.54557 2.34202 7.20806 3.67499 7.24343 3.70366C7.35662 3.81115 7.44152 3.95448 7.46274 4.12648C7.49811 4.46331 7.26466 4.77863 6.91801 4.82163C6.7553 4.84313 6.59966 4.79297 6.48647 4.6998L4.73909 3.3095C4.6542 3.24572 4.52686 3.25933 4.45611 3.34533L0.303427 8.72022C0.0345991 9.05705 -0.0573683 9.49421 0.0345991 9.91703L0.565181 12.2175C0.593478 12.3393 0.699595 12.4253 0.826934 12.4253L3.16149 12.3966C3.58596 12.3895 3.98213 12.196 4.25095 11.852ZM7.52039 11.1355H11.3271C11.6985 11.1355 12.0006 11.4415 12.0006 11.8177C12.0006 12.1947 11.6985 12.5 11.3271 12.5H7.52039C7.14899 12.5 6.84691 12.1947 6.84691 11.8177C6.84691 11.4415 7.14899 11.1355 7.52039 11.1355Z"
      />
    </SvgIcon>
  );
};

export default CustomEditIcon;
