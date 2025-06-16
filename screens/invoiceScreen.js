import React, { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";

// Component Imports
import { styles, buttonStyles, colors}from '../styles' ;

// Library Imports
//import Controller from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { mpmInvoicetemplate } from "../data/InvTemplate";
import { cusNameTemplate } from "../data/cusTemplate";
import { FlatList } from "react-native-gesture-handler";



export default function Invoice() {

    const [addedValue, setAddedValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [value, setValue] = useState();
    const [values, setValues] = useState();

    const handleAddValue = () => {
        const selectedItem = items.find(item => item.value === value);
        const selectedCustomer = customers.find(customer => customer.value === values);
        if (selectedItem && selectedCustomer) {
            const formattedValue = `${selectedCustomer.label} | ${selectedItem.label}`;
            setAddedValue(formattedValue);
            console.log("Invoice Added", formattedValue);
            testForNull(formattedValue);
        } else if (selectedItem || selectedCustomer) { 
            if (selectedItem) {
                setAddedValue(selectedItem.label);
                console.log("Invoice Added", selectedItem.label);
                testForNull(selectedItem.label);
            }
            if (selectedCustomer) {
                setAddedValue(selectedCustomer.label);
                console.log("Customer Added", selectedCustomer.label);
                testForNull(selectedCustomer.label);
            }
        }
        
    };

    const handleRemoveValue = () => {
        const selectedItem = items.find(item => item.value === value);
        const selectedCustomer = customers.find(customer => customer.value === values);
        if (selectedItem && selectedCustomer) {
            setAddedValue(selectedItem === "Invoice Removed" && selectedCustomer === "Customer Removed");
            setValue(null);
            setValues(null);
            console.log("Invoice Removed");
        } else if (selectedItem || selectedCustomer) {
            if (selectedItem) {
                setAddedValue(selectedItem === "Invoice Removed");
                setValue(null);
                console.log("Invoice Removed");
            }
            if (selectedCustomer) {
                setAddedValue(selectedCustomer === "Invoice Removed");
                setValues(null);
                console.log("Customer Removed");
            }   
        }

    };
    

    const [items, setItems] = useState(() => {
    return Object.values(mpmInvoicetemplate)
        .flat() // flatten nested arrays like basicOP, etc.
        .map((item) => {

        const formattedPrice = item.pricing === 'N/A' ? 'N/A' : `$${item.pricing}`;
        const label = `${item.id}: ${item.description} | ${item.unit} | ${formattedPrice}`;

        if (item.unit === '') {
            return {
                label: `${item.id}: ${item.description} | ${formattedPrice}`,
                value: `${item.id}: ${item.description} | ${formattedPrice}`,
            };
        }

        return {
            label,
            value: label,
        };
        });
    });

    const [customers, setCustomers] = useState(() => {
        return Object.values(cusNameTemplate).map((customer) => {
            return {
                label: `${customer.cusName} | ${customer.cusId} | ${customer.cusAddress} | ${customer.cusPhone}`,
                value: `${customer.cusName} | ${customer.cusId} | ${customer.cusAddress} | ${customer.cusPhone}`,
            };
        });
    });




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
                    open={opens}
                    value={values}
                    items={customers}
                    setOpen={setOpens}
                    setValue={setValues}
                    setItems={setCustomers}
                    placeholder="Select an Customer"
                    style={{ marginBottom: 10 }}
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select an Invoice"
                    zIndex={1000}
                    zIndexInverse={1000}
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
                <FlatList
                    style={styles.previewContainer}
                    data={addedValue ? [addedValue] : []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.previewItem}>
                            <Text style={styles.previewText}>{item}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.previewList}
                />
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
