import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { FormField, Button, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFromControls/KodlamaIoTextInput'

export default function productAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün Adı Zorunlu"),
        unitPrice: Yup.number().required("Ürün Fiyatı Zorunlu")
    })
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                {/* <FormField>
                    <Field name="productName" placeholder="Ürün Adı">
                    </Field>
                    <ErrorMessage name="productName" render={error =>
                        <Label pointing basic color="red" content={error}>

                        </Label>
                    }>
                    </ErrorMessage>
                </FormField> */}
                <FormField>
                    <Field name="unitPrice" placeholder="Ürün Fiyatı">
                    </Field>
                    <ErrorMessage name="unitPrice" render={error =>
                        <Label pointing basic color="red" content={error}>

                        </Label>
                    }>
                    </ErrorMessage>
                </FormField>
                <Button color="green" type="submit">
                    Ekle
                </Button>
            </Form>
        </Formik>

    )
}
