<?php

abstract class ParentModel {
	public function __construct() {}
	
	public function pdoConnect($servername, $dbname, $username,$password){
		try {
			$this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
			// set the PDO error mode to exception
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return 1;
		}
		catch(PDOException $e){
			return array("error"=>$e->getMessage());
		}
	}
	
	public function getPDOData($sql_statement){
		try{
			$sql = $this->conn->prepare($sql_statement); 
			$sql->execute();
			$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
			if($result){
				$return_value = $sql->fetchAll();
				if ($return_value == null){
					return array("error"=>"Record not found");
				}else{
					return array("result"=>$return_value);
				}
			}
		}catch (PDOException $e){
			return array("error"=>$e->getMessage());
		}
	}
	
	public function setPDOData($sql_statement){
		try {
			$sql = $sql_statement;
			// use exec() because no results are returned
			$this->conn->exec($sql);
			return array("result"=>"Database successfully updated");
		}catch(PDOException $e){
			return array("error"=>$e->getMessage());
		}
	}
	
	public function closeConnection(){
		$this->conn = null;
	}
	
	public function filterFormData($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	
	//================================================
	public function renderJSON($response_obj){
		echo json_encode($response_obj);
	}
	
	public function render($response){
		echo $response;
	}

	public function readConfidential(){
		$myfile = "../../gitignore/confidential.json";
		$fileobj = fopen($myfile, "r") or die ("Unable to open file!");
		$content = fread($fileobj, filesize($myfile));
		fclose($fileobj);
		return $content;
	}

}

?>