import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    if (edit) {
        return (
            <div>
                <div>
                    <h3>Edit Mode</h3>
                </div>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={edit}
                    onChange={updateEditMode}
                />
                <Form.Group controlId="formStudentName">
                    <Form.Label>Student Name: </Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        disabled={!edit}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                        disabled={!edit}
                    />
                </Form.Group>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <h3>Edit Mode</h3>
                </div>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={edit}
                    onChange={updateEditMode}
                />
                {name} {student ? "is" : "is not"} a student
            </div>
        );
    }
}
