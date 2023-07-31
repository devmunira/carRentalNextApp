
// CustomButton Props Types
export interface CustomButtonProps {
    title : string,
    handleClick?: React.MouseEventHandler<HTMLButtonElement>,
    customStyles?: string,
    btnType?: "button" | "submit"
}

// Manufecturar ComboBox Props Types
export interface ManufecturerComboBoxTypes {
    manufecturer : string,
    setmanufecturer : (manufecturer : string) => void
}