import React from 'react';
import { Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {

    renderError({ error, touched }){
        if(error && touched){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
  
    renderInput = ({ input, label, meta}) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={className}>
          <label>{label} </label>
          <input {...input} />
          {this.renderError(meta)}
        </div>
      );
    }

    render(){
        return(
            <form
            className="ui form error"
            onSubmit={this.props.handleSubmit(this.props.onSubmit)}
            >
            <Field 
                name="title"
                component={this.renderInput}
                label="Title"
            />
            <Field
                name="description"
                component={this.renderInput}
                label="Description"
            />
            <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {

    const errors = {};

    if(!formValues.title){
        errors.title = "You must enter a TITLE";
    }

    if(!formValues.description){
        errors.description = "You must enter a DESCRIPTION";
    }

    return errors;
}

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);