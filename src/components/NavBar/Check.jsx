import * as React from "react";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { useDispatch, useSelector } from "react-redux";
import { StateButton } from "../../redux/actions";
import { US } from "country-flag-icons/react/3x2";
import { CO } from "country-flag-icons/react/3x2";
import S from "./Check.module.css";

export default function ExampleMaterialSwitch() {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const stateButton = useSelector((state) => state.traduction);

  return (
    <>
      <Switch
        variant={checked ? "soft" : "solid"}
        checked={checked}
        endDecorator={checked ? "ENG" : "ESP"}
        onChange={(event) => {
          setChecked(event.target.checked);
          dispatch(StateButton(checked));
        }}
        sx={(theme) => ({
          marginRight: "2%",
          "--Switch-thumb-shadow":
            "rgb(100 100 100 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
          "--Switch-thumb-size": "18px",
          "--Switch-track-width": "40px",
          "--Switch-track-height": "24px",
          "--Switch-track-border": "solid",
          "--Switch-track-background": "rgb(100, 100, 100)",
          "&:hover": {
            "--Switch-track-background": "rgb(100 100 100)",
          },
          [`&.${switchClasses.checked}`]: {
            "--Switch-thumb-background": "rgb(255, 255, 210)",
            "--Switch-track-background": "rgba(255, 118, 210, 1)",
            "&:hover": {
              "--Switch-track-background": "rgba(25, 118, 210, 0.5)",
            },
          },
          [`&.${switchClasses.disabled}`]: {
            "--Switch-track-background": "rgb(255, 255, 255, 0.12)",
            "--Switch-thumb-color": "rgb(245, 245, 245)",
          },
          [`&.${switchClasses.checked}.${switchClasses.disabled}`]: {
            "--Switch-track-background": "rgba(255, 118, 210, 0.12)",
            "--Switch-thumb-color": "rgb(167, 202, 237)",
          },
          [theme.getColorSchemeSelector("dark")]: {
            "--Switch-thumb-background": "#fff",
            "--Switch-track-background": "rgba(255, 255, 255, 0.5)",
            [`&.${switchClasses.checked}`]: {
              "--Switch-thumb-background": "rgb(144, 202, 249)",
              "--Switch-track-background": "rgba(144, 202, 249, 0.5)",
            },
          },
        })}
      />
      {stateButton ? (
        <US title="United States" className={S.icon} />
      ) : (
        <CO title="Colombia" className={S.icon} />
      )}
    </>
  );
}
