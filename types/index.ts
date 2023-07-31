// CustomButton Props Types
export interface CustomButtonProps {
    title : string,
    handleClick?: React.MouseEventHandler < HTMLButtonElement >,
    customStyles?: string,
    btnType?: "button" | "submit",
    textStyles?: string,
}

// Manufecturar ComboBox Props Types
export interface ManufecturerComboBoxTypes {
    manufecturer : string,
    setmanufecturer : (manufecturer : string) => void
}

// calculate car rent
export interface calculateCarRentProps {
    mpg : number;
    year : number
}


// Single Car Data Props types
export interface singleCarProps {
    city_mpg : number;
    class : string;
    combination_mpg : number;
    cylinders : number;
    displacement : number;
    drive :string;
    fuel_type : string;
    highway_mpg : number;
    make : string;
    model : string;
    transmission : string;
    year : number;
}