import React, { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";

// Component Imports
import { styles, buttonStyles, colors}from '../styles' ;

// Library Imports
//import Controller from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { mpmInvoicetemplate } from "../data/InvTemplate";



export default function Invoice() {

    const [addedValue, setAddedValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const handleAddValue = () => {
        console.log("Invoice Submitted", value);
        testForNull(value);
    };

    const handleRemoveValue = () => {
        console.log("Invoice Removed", value);
        setValue(null);
        setAddedValue('');      
    };
    

    const [items, setItems] = useState(() =>
      Object.entries(mpmInvoicetemplate).flatMap(([category, entries]) => [
        {
          label: category.replace(/_/g, ' ').toUpperCase(),
          value: category,
          parent: null,
          isCategory: true,
        },
        ...entries.map(item => ({
          label: item.pricing === 'N/A'
            ? `${item.description} - ${item.ccec_unit} - ${item.pricing}`
            : `${item.description} - ${item.ccec_unit} - $${item.pricing}`,
          value: item.pricing === 'N/A'
            ? `${item.description} - ${item.ccec_unit} - ${item.pricing}`
            : `${item.description} - ${item.ccec_unit} - $${item.pricing}`,
          parent: category,
        }))
      ])
    );


    const testForNull = (value) => {
        if (value === null || value === undefined || value === '') {
            setAddedValue("No Invoice Selected");
        } else {
            setAddedValue(value);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}>
            <View style={styles.container}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select an Invoice"
                />

                <View style={{flexDirection: 'row', display: 'inline-flex', justifyContent: 'space-between', width: '100%'}}>
                  <Pressable
                    style={[buttonStyles.buttonContainer, { backgroundColor: colors.lime_green, marginTop: 5 }]}
                    onPress={handleAddValue}>
                    <Text style={buttonStyles.button_text}>Add</Text>
                  </Pressable>

                  <Pressable
                    style={[buttonStyles.buttonContainer, { backgroundColor: colors.lime_green, marginTop: 5 }]}
                    onPress={handleRemoveValue}>
                    <Text style={buttonStyles.button_text}>Remove</Text>
                  </Pressable>
                </View>
                <Text style={styles.text}>Preview Invoices:</Text>
                <View style={styles.previewContainer}> 
                    <Text style={styles.text}>
                        {addedValue}
                    </Text>
                </View>
                <View style={[styles.notesContainer]}>

                </View>
            </View>            
            <View style={{backgroundColor: 'white'}}>                
                <Pressable style={buttonStyles.buttonContainer} onPress={() => console.log("Submit Invoice")}>
                    <Text style={buttonStyles.button_text}>Submit</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}
