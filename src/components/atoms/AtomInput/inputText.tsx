import lodash from "lodash";
import { FC } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Colors from "../../../constants/Colors";
import AtomIcon from "../AtomIcon";
import AtomText from "../AtomText";
import AtomWrapper from "../AtomWrapper";
import AtomTextError from "./textError";
import AtomInputType from "./type";

const InputText: FC<AtomInputType> = (props) => {
  const {
    formik,
    value,
    id,
    label,
    wrapperWidth,
    placeholder,
    onPressIcon,
    iconUri,
    inputIconWidth,
    inputIconHeigth,
    inputIconcolor,
    labelFontSize: fontSize,
  } = props;
  const colorScheme = useColorScheme();
  return (
    <AtomWrapper
      width={wrapperWidth ?? "100%"}
      style={{
        marginBottom: 5,
      }}
    >
      <>
        {label && (
          <AtomText
            style={{
              fontSize: fontSize as number,
              fontWeight: "bold",
              color: `${
                colorScheme === "dark" ? "#ffffff" : Colors.light.primary
              }`,
            }}
          >
            {label}
          </AtomText>
        )}
        <AtomWrapper
          style={[
            styles.inputContainer,
            {
              backgroundColor: `${
                colorScheme === "dark"
                  ? Colors?.dark?.inputBacckground
                  : Colors?.light?.inputBacckground
              }`,
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { width: iconUri ? "85%" : "100%" },
              {
                color:
                  colorScheme !== "dark"
                    ? Colors.light?.inputColor
                    : Colors.dark?.inputColor,
                //backgroundColor: '#ffffff',
              },
            ]}
            placeholder={placeholder}
            value={value ?? lodash.get(formik?.values, id)}
            onChangeText={formik?.handleChange(id)}
            placeholderTextColor="#BCBCBC"
            {...props}
          />
          {iconUri && (
            <TouchableOpacity
              onPress={onPressIcon}
              style={styles.iconContainer}
            >
              <AtomIcon
                color={
                  inputIconcolor ||
                  `${
                    colorScheme === "dark"
                      ? Colors?.dark?.primary
                      : Colors?.light?.primary
                  }`
                }
                uri={iconUri}
                width={inputIconWidth || "22px"}
                height={inputIconHeigth || "22px"}
              />
            </TouchableOpacity>
          )}
        </AtomWrapper>
        <AtomTextError {...props} />
      </>
    </AtomWrapper>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: "#a0a0a0",
    // backgroundColor: "#66c7d4",
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  input: {
    fontSize: 16,
    // color: "#ffffff",
  },
});

export default InputText;
